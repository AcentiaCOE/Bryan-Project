//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace StarApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Correspondence
    {
        public int correspondenceid { get; set; }
        public Nullable<int> correspondencetypeid { get; set; }
        public string awardnum { get; set; }
        public string grantyear { get; set; }
        public string announcementnum { get; set; }
        public Nullable<int> grantspecialistid { get; set; }
        public Nullable<int> grantsmgmtofficerid { get; set; }
        public string projectofficer { get; set; }
        public Nullable<decimal> amountrequested { get; set; }
        public Nullable<System.DateTime> dateentered { get; set; }
        public Nullable<System.DateTime> dateofgranteeletter { get; set; }
        public Nullable<System.DateTime> datereceivedpgo { get; set; }
        public Nullable<System.DateTime> datereceiveddiv { get; set; }
        public Nullable<System.DateTime> dateduefromdiv { get; set; }
        public Nullable<System.DateTime> datecompleted { get; set; }
        public Nullable<System.DateTime> dateofresponsetograntee { get; set; }
        public string completed { get; set; }
        public Nullable<System.DateTime> C15daytarget { get; set; }
        public Nullable<System.DateTime> C30daytarget { get; set; }
        public Nullable<int> cioid { get; set; }
        public Nullable<int> divisionid { get; set; }
        public string granteename { get; set; }
        public Nullable<bool> archived { get; set; }
        public Nullable<int> LeadBranchID { get; set; }
        public Nullable<System.DateTime> DateRoutedHolder { get; set; }
        public bool IsResearch { get; set; }
        public Nullable<System.DateTime> DateDueToPGO { get; set; }
    }
}
