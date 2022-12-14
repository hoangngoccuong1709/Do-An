using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Do_An.Models
{

    public class Plantingtool
    {
        [Key]
        public int Idplantingtool { get; set; }
        public string Imagetool { get; set; }

        public string Nametool { get; set; }

        public int Price { get; set; }
        public string Classify { get; set; }

        public string Describe { get; set; }
        // public virtual ICollection<Order> Order { get; set; }
    }

}