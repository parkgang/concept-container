package com.example.demo.service;

import com.example.demo.dto.UserInfo;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

@Service
public class PdfService {

    public byte[] generatePdfWithUserInfo(UserInfo userInfo) throws IOException {
        ClassPathResource resource = new ClassPathResource("PDF POC.pdf");

        try (InputStream inputStream = resource.getInputStream();
             PDDocument document = PDDocument.load(inputStream)) {

            PDPage page = document.getPage(0);

            PDFont font = PDType1Font.HELVETICA;

            try (PDPageContentStream contentStream = new PDPageContentStream(document, page,
                    PDPageContentStream.AppendMode.APPEND, true, true)) {

                contentStream.setFont(font, 12);

                contentStream.beginText();
                contentStream.newLineAtOffset(100, 700);
                contentStream.showText("Name: " + userInfo.getName());
                contentStream.endText();

                contentStream.beginText();
                contentStream.newLineAtOffset(100, 680);
                contentStream.showText("Age: " + userInfo.getAge() + " years old");
                contentStream.endText();
            }

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            document.save(outputStream);
            return outputStream.toByteArray();
        }
    }

}