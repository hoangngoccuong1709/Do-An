using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class edituser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Avatar",
                table: "AspNetUsers",
                newName: "Avatars");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Avatars",
                table: "AspNetUsers",
                newName: "Avatar");
        }
    }
}
