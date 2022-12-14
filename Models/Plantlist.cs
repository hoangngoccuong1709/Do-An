using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Do_An.Models
{

    public class Plantlist
    {
        [Key]
        public int Idlist { get; set; }

        public string Nameplantlist { get; set; }
        public string Describe { get; set; }

    }

}