using System.ComponentModel.DataAnnotations;
//namespace dotnetthietke1.API.Crud.Data.Entities;
namespace Do_An.Models
{
    public class DataEmailSend
    {


        public string Email { get; set; }

        // public int Quantity{get ; set;}
        public string name { get; set; }
        public string PassSMTP { get; set; }
        public Boolean? Status { get; set; }

    }
}