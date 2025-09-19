package com.example.demo.service;

import com.example.demo.dto.UserInfo;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType0Font;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

@Service
public class PdfService {

    public byte[] generatePdfWithUserInfo(UserInfo userInfo) throws IOException {
        ClassPathResource resource = new ClassPathResource("pdf-template.pdf");

        try (InputStream inputStream = resource.getInputStream();
             PDDocument document = PDDocument.load(inputStream)) {

            PDPage page = document.getPage(0);

            ClassPathResource fontResource = new ClassPathResource("fonts/NotoSansKR-Regular.ttf");
            PDFont font = PDType0Font.load(document, fontResource.getInputStream());

            try (PDPageContentStream contentStream = new PDPageContentStream(document, page,
                    PDPageContentStream.AppendMode.APPEND, true, true)) {

                contentStream.setFont(font, 12);

                // 이름
                contentStream.beginText();
                contentStream.newLineAtOffset(305, 743);
                contentStream.showText(userInfo.getName());
                contentStream.endText();

                // 나이
                contentStream.beginText();
                contentStream.newLineAtOffset(305, 723);
                contentStream.showText(String.valueOf(userInfo.getAge()));
                contentStream.endText();

                // 체크 표시 추가 (✓ 심볼 사용)
                contentStream.beginText();
                contentStream.newLineAtOffset(113, 679);
                contentStream.showText("✓");
                contentStream.endText();
            }

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            document.save(outputStream);
            return outputStream.toByteArray();
        }
    }

}