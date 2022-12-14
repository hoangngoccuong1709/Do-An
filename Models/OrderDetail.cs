using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Do_An;
using Do_An.Models;

public class OrderDetail
{
    [Key]
    public int Id { get; set; }

    [Display(Name = "Sản phẩm")]
    public int Idplantingtool { get; set; }

    [Display(Name = "Số lượng")]
    public string UserId { get; set; }
    public float Quantity { get; set; }

    [Display(Name = "Đơn giá")]
    public double Price { get; set; }

    [Display(Name = "Đơn hàng")]
    public int OrderId { get; set; }

    [Display(Name = "Trạng Thái")]
    public string Stattus { get; set; }

    [ForeignKey("OrderId")]
    public virtual Order Order { get; set; }

    [ForeignKey("Idplantingtool")]
    public virtual Plantingtool Plantingtool { get; set; }

    [ForeignKey("UserId")]
    public virtual User User { get; set; }
}