using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using StarApp.Models;

namespace StarApp.Controllers
{
    public class CorrespondenceController : ApiController
    {
        private CorrespondenceEntities db = new CorrespondenceEntities();

        // GET api/Correspondence
        public IQueryable<Correspondence> GetCorrespondence()
        {
            //return db.Correspondence;
            return db.Correspondence.OrderByDescending(c => c.dateentered).Take(10);
        }

        // GET api/CorrespondenceByNum/10
        public IQueryable<Correspondence> GetCorrespondenceByNum(int num)
        {
            return db.Correspondence.OrderByDescending(c => c.dateentered).Take(num);
        }

        
        // GET api/Correspondence/5
        [ResponseType(typeof(Correspondence))]
        public IHttpActionResult GetCorrespondence(int id)
        {
            Correspondence correspondence = db.Correspondence.Find(id);
            if (correspondence == null)
            {
                return NotFound();
            }

            return Ok(correspondence);
        }

        // PUT api/Correspondence/5
        public IHttpActionResult PutCorrespondence(int id, Correspondence correspondence)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != correspondence.correspondenceid)
            {
                return BadRequest();
            }

            db.Entry(correspondence).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CorrespondenceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/Correspondence
        [ResponseType(typeof(Correspondence))]
        public IHttpActionResult PostCorrespondence(Correspondence correspondence)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Correspondence.Add(correspondence);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = correspondence.correspondenceid }, correspondence);
        }

        // DELETE api/Correspondence/5
        [ResponseType(typeof(Correspondence))]
        public IHttpActionResult DeleteCorrespondence(int id)
        {
            Correspondence correspondence = db.Correspondence.Find(id);
            if (correspondence == null)
            {
                return NotFound();
            }

            db.Correspondence.Remove(correspondence);
            db.SaveChanges();

            return Ok(correspondence);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CorrespondenceExists(int id)
        {
            return db.Correspondence.Count(e => e.correspondenceid == id) > 0;
        }
    }
}