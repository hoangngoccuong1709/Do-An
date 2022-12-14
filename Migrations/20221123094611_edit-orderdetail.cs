using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class editorderdetail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDetail_Plantingtool_ProductId",
                table: "OrderDetail");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "OrderDetail",
                newName: "plantingtoolID");

            migrationBuilder.RenameIndex(
                name: "IX_OrderDetail_ProductId",
                table: "OrderDetail",
                newName: "IX_OrderDetail_plantingtoolID");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDetail_Plantingtool_plantingtoolID",
                table: "OrderDetail",
                column: "plantingtoolID",
                principalTable: "Plantingtool",
                principalColumn: "Idplantingtool",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDetail_Plantingtool_plantingtoolID",
                table: "OrderDetail");

            migrationBuilder.RenameColumn(
                name: "plantingtoolID",
                table: "OrderDetail",
                newName: "ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderDetail_plantingtoolID",
                table: "OrderDetail",
                newName: "IX_OrderDetail_ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDetail_Plantingtool_ProductId",
                table: "OrderDetail",
                column: "ProductId",
                principalTable: "Plantingtool",
                principalColumn: "Idplantingtool",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
