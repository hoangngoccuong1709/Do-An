using System.ComponentModel.DataAnnotations;
//namespace dotnetthietke1.API.Crud.Data.Entities;
namespace Do_An.Models
{
    public class SMTPs
    {

        public int id { get; set; }
        public string name { get; set; }

        public string Email { get; set; }

        public string PassSMTP { get; set; }

        public DateTime? CreateAt { get; set; }
        public DateTime? UpdateAt { get; set; }
        public Boolean? Status { get; set; }

    }
}