using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Do_An.Models
{

    public class Order
    {
        [Key]
        public int Idorder { get; set; }
        public DateTime DateSetUp { get; set; }
        public int Quantity { get; set; }

        public float TotalMoney { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        public virtual ICollection<OrderDetail> OrderDetail { get; set; }



    }

}