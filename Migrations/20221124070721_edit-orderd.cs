using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class editorderd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDetail_Plantingtool_plantingtoolID",
                table: "OrderDetail");

            migrationBuilder.DropIndex(
                name: "IX_OrderDetail_plantingtoolID",
                table: "OrderDetail");

            migrationBuilder.DropColumn(
                name: "plantingtoolID",
                table: "OrderDetail");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetail_Idplantingtool",
                table: "OrderDetail",
                column: "Idplantingtool");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDetail_Plantingtool_Idplantingtool",
                table: "OrderDetail",
                column: "Idplantingtool",
                principalTable: "Plantingtool",
                principalColumn: "Idplantingtool",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDetail_Plantingtool_Idplantingtool",
                table: "OrderDetail");

            migrationBuilder.DropIndex(
                name: "IX_OrderDetail_Idplantingtool",
                table: "OrderDetail");

            migrationBuilder.AddColumn<int>(
                name: "plantingtoolID",
                table: "OrderDetail",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetail_plantingtoolID",
                table: "OrderDetail",
                column: "plantingtoolID");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDetail_Plantingtool_plantingtoolID",
                table: "OrderDetail",
                column: "plantingtoolID",
                principalTable: "Plantingtool",
                principalColumn: "Idplantingtool",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
