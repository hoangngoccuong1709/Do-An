using System.ComponentModel.DataAnnotations;

public class EmailConfirmationModel
{

    [Required]
    public string ConfirmationToken { get; set; }

}