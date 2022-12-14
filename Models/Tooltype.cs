using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Do_An.Models
{

    public class Tooltype
    {
        [Key]
        public int Idtooltype { get; set; }

        public string Nametooltype { get; set; }
        public string Describe { get; set; }

    }

}