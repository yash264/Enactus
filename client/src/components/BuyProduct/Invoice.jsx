import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Invoice = ({
    name, email,
    countryCode, phoneNo,
    address, products,
    total, method
}) => {

    const generateInvoicePDF = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0);
        doc.text("Enactus - NIT Allahabad", 105, 20, { align: "center" });


        // Customer Info
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(80, 80, 80);

        let y = 40;

        doc.text(`Name : ${name}`, 14, y); y += 7;
        doc.text(`Mobile No. : ${countryCode} ${phoneNo}`, 14, y); y += 7;
        doc.text(`Email : ${email}`, 14, y); y += 7;

        // Address label
        doc.text("Address :", 14, y);
        const splitAddress = doc.splitTextToSize(address, 160);
        doc.text(splitAddress, 35, y);
        y += splitAddress.length * 6;

        doc.text(`Method : ${method}`, 14, y + 6);


        // === Line Divider ===
        let currentY = y + 10;
        doc.setDrawColor(200);
        doc.line(14, currentY, 196, currentY);
        currentY += 6;


        // === Table: Cart Items
        const tableRows = products.map(item => [
            item.name,
            item.quantity,
            item.price,
            (item.quantity * item.price),
        ]);


        autoTable(doc, {
            startY: currentY,
            head: [["Product", "Quantity", "Price", "Total"]],
            body: tableRows,
            theme: "grid",
            headStyles: {
                fillColor: [245, 158, 11], // Tailwind yellow-500
                textColor: 255,
                fontStyle: "bold",
                halign: "center",
            },
            bodyStyles: {
                textColor: 50,
                fontSize: 11,
                halign: "center",
            },
            alternateRowStyles: {
                fillColor: [250, 250, 250],
            },
        });


        // === Total
        const tableEndY = doc.lastAutoTable.finalY + 10;
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(33, 37, 41);
        doc.text(`Grand Total in (Rupees): ${total.toFixed(2)}`, 14, tableEndY);


        // === Footer
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(120);
        doc.text("Thank you for shopping with Enactus!", 14, tableEndY + 10);


        // === Save PDF
        doc.save("invoice.pdf");

    }

    const generateInvoice = () => {
        generateInvoicePDF({
            name,
            countryCode,
            phoneNo,
            email,
            address,
            products,
            method,
        });

        // Optionally localStorage
        localStorage.removeItem('cartItem');
        toast.success("Order placed!!", { autoClose: 3000 });
    };

    return (
        <>
            <div className="text-center pt-4">
                <button
                    onClick={generateInvoice}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
                >
                    Place Order
                </button>

                <ToastContainer />
            </div>
        </>
    )
};

export default Invoice;
