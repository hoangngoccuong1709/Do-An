using System.ComponentModel.DataAnnotations;
//namespace dotnetthietke1.API.Crud.Data.Entities;
namespace Do_An.Models
{
    public class SendEmail
    {


        public string SendNameEmail { get; set; }

        // public int Quantity{get ; set;}
        public string Title { get; set; }
        public string Content { get; set; }

    }
}