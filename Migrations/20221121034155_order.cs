using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Do_An.Migrations
{
    public partial class order : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_AspNetUsers_Id",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_Order_Plantingtool_Idplantingtool",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_Id",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_Idplantingtool",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Author",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Nameconten",
                table: "Order");

            migrationBuilder.RenameColumn(
                name: "View",
                table: "Order",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "Idplantingtool",
                table: "Order",
                newName: "Quantity");

            migrationBuilder.AddColumn<int>(
                name: "PlantingtoolIdplantingtool",
                table: "Order",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "OrderDetail",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Idplantingtool = table.Column<int>(type: "integer", nullable: false),
                    UserId = table.Column<string>(type: "text", nullable: false),
                    Quantity = table.Column<float>(type: "real", nullable: false),
                    Price = table.Column<double>(type: "double precision", nullable: false),
                    OrderId = table.Column<int>(type: "integer", nullable: false),
                    Stattus = table.Column<string>(type: "text", nullable: false),
                    ProductId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetail", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderDetail_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderDetail_Order_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Order",
                        principalColumn: "Idorder",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderDetail_Plantingtool_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Plantingtool",
                        principalColumn: "Idplantingtool",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Order_PlantingtoolIdplantingtool",
                table: "Order",
                column: "PlantingtoolIdplantingtool");

            migrationBuilder.CreateIndex(
                name: "IX_Order_UserId",
                table: "Order",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetail_OrderId",
                table: "OrderDetail",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetail_ProductId",
                table: "OrderDetail",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetail_UserId",
                table: "OrderDetail",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_AspNetUsers_UserId",
                table: "Order",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Plantingtool_PlantingtoolIdplantingtool",
                table: "Order",
                column: "PlantingtoolIdplantingtool",
                principalTable: "Plantingtool",
                principalColumn: "Idplantingtool");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_AspNetUsers_UserId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_Order_Plantingtool_PlantingtoolIdplantingtool",
                table: "Order");

            migrationBuilder.DropTable(
                name: "OrderDetail");

            migrationBuilder.DropIndex(
                name: "IX_Order_PlantingtoolIdplantingtool",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_UserId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "PlantingtoolIdplantingtool",
                table: "Order");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Order",
                newName: "View");

            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "Order",
                newName: "Idplantingtool");

            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "Order",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "Order",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Nameconten",
                table: "Order",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Order_Id",
                table: "Order",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Order_Idplantingtool",
                table: "Order",
                column: "Idplantingtool");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_AspNetUsers_Id",
                table: "Order",
                column: "Id",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Plantingtool_Idplantingtool",
                table: "Order",
                column: "Idplantingtool",
                principalTable: "Plantingtool",
                principalColumn: "Idplantingtool",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
