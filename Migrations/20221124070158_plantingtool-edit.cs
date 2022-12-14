using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class plantingtooledit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Plantingtool_PlantingtoolIdplantingtool",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_PlantingtoolIdplantingtool",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "PlantingtoolIdplantingtool",
                table: "Order");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PlantingtoolIdplantingtool",
                table: "Order",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Order_PlantingtoolIdplantingtool",
                table: "Order",
                column: "PlantingtoolIdplantingtool");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Plantingtool_PlantingtoolIdplantingtool",
                table: "Order",
                column: "PlantingtoolIdplantingtool",
                principalTable: "Plantingtool",
                principalColumn: "Idplantingtool");
        }
    }
}
