from html import escape
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile


OUTPUT = Path("docs/laser-marketing-checklist.docx")

done_items = [
    "Focus content on target concerns rather than only machine names",
    "Add Diode Laser profile",
    "Include Diode Laser benefit for smoother skin / less waxing or ingrown hairs",
    "Include Diode Laser skin-type guidance",
    "Add Q-Switch Laser profile",
    "Include Q-Switch use for pigmentation / sunspots / tattoo fading",
    "Include Q-Switch skin-tone caution for deeper tones",
    "Add MNRF profile",
    "Include MNRF use for acne scars, pores, and early laxity",
    "Include MNRF safety note for deeper Indian skin / all skin tones",
    "Add CO2 Laser profile",
    "Include CO2 use for severe scars, deeper lines, and select growths",
    "Include CO2 downtime of about 7-14 days",
    "Add Fractional Laser profile",
    "Include Fractional Laser use for fine lines, stretch marks, and mild scars",
    "Include Fractional Laser safer / more versatile skin-tone note",
    "Add Dermapen profile",
    "Include Dermapen use for superficial scars, dullness, and fine lines",
    "Include Dermapen 1-2 day redness downtime",
    "Add HIFU profile",
    "Include HIFU use for sagging, jawline softness, and double chin",
    "Include HIFU no/minimal downtime and all-skin-tone note",
    "Add Carbon Laser Peel profile",
    "Include Carbon Laser Peel use for oiliness, pores, and instant brightness",
    "Build a Shop by Concern section/menu",
    "Include Anti-Ageing & Lifting pathway with HIFU, Fractional Laser, and CO2",
    "Include Scars & Texture pathway with MNRF, Dermapen, and Fractional Laser",
    "Include Pigmentation & Tattoos pathway with Q-Switch and Carbon Laser Peel",
    "Include Smooth Body pathway with Diode Laser Hair Removal",
    "Add a What to Expect timeline",
    "Include prep / planning guidance in the timeline",
    "Include downtime visibility",
    "Replace generic CTAs with stronger action copy",
]

partial_items = [
    "Fitzpatrick / skin-tone reassurance is partially covered through skin-type notes, but not yet as a visible Fitzpatrick badge or scale UI.",
]

pending_items = [
    "Add individual laser page hooks like Say Goodbye to Acne Scars",
    "Add How It Feels descriptions for each laser",
    "Add interactive FAQs for safety, sessions, and skin-tone compatibility",
    "Add standardised before-and-after gallery",
    "Add Fitzpatrick Skin Tone Scale badges",
    "Add behind-the-scenes 30-second procedure video",
    "Offer downloadable Pre and Post Laser Care Guide PDF for email capture",
]


def text_run(text, bold=False, color="1A1A2E", size=21):
    bold_xml = "<w:b/>" if bold else ""
    return (
        f"<w:r><w:rPr><w:rFonts w:ascii=\"Calibri\" w:hAnsi=\"Calibri\"/>"
        f"{bold_xml}<w:color w:val=\"{color}\"/><w:sz w:val=\"{size}\"/></w:rPr>"
        f"<w:t>{escape(text)}</w:t></w:r>"
    )


def para(text="", style=None, bold=False, color="1A1A2E", size=21, after=120, before=0):
    style_xml = f"<w:pStyle w:val=\"{style}\"/>" if style else ""
    return (
        f"<w:p><w:pPr>{style_xml}<w:spacing w:before=\"{before}\" w:after=\"{after}\" "
        f"w:line=\"300\" w:lineRule=\"auto\"/></w:pPr>{text_run(text, bold, color, size)}</w:p>"
    )


def mixed_summary(done_count, partial_count, pending_count):
    return (
        "<w:p><w:pPr><w:spacing w:after=\"160\" w:line=\"300\" w:lineRule=\"auto\"/></w:pPr>"
        + text_run("Summary: ", True, "1A1A2E", 22)
        + text_run(f"{done_count} items done, {partial_count} item partially covered, {pending_count} items pending.", False, "1A1A2E", 22)
        + "</w:p>"
    )


def cell(content, width, fill="FFFFFF", align="left", bold=False, color="1A1A2E"):
    jc = "center" if align == "center" else "left"
    return (
        f"<w:tc><w:tcPr><w:tcW w:w=\"{width}\" w:type=\"dxa\"/>"
        f"<w:shd w:fill=\"{fill}\"/><w:vAlign w:val=\"center\"/>"
        f"<w:tcMar><w:top w:w=\"90\" w:type=\"dxa\"/><w:start w:w=\"130\" w:type=\"dxa\"/>"
        f"<w:bottom w:w=\"90\" w:type=\"dxa\"/><w:end w:w=\"130\" w:type=\"dxa\"/></w:tcMar>"
        f"<w:tcBorders><w:top w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/>"
        f"<w:left w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/>"
        f"<w:bottom w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/>"
        f"<w:right w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/></w:tcBorders></w:tcPr>"
        f"<w:p><w:pPr><w:jc w:val=\"{jc}\"/><w:spacing w:after=\"0\" w:line=\"276\" w:lineRule=\"auto\"/></w:pPr>"
        f"{text_run(content, bold, color, 20)}</w:p></w:tc>"
    )


def row(cells):
    return "<w:tr>" + "".join(cells) + "</w:tr>"


def status_table(title, items, status, status_color, status_fill):
    widths = [792, 1584, 6984]
    xml = [para(title, "Heading2", True, "2E74B5", 26, after=140, before=260)]
    xml.append(
        "<w:tbl><w:tblPr><w:tblW w:w=\"9360\" w:type=\"dxa\"/><w:tblInd w:w=\"120\" w:type=\"dxa\"/>"
        "<w:tblLayout w:type=\"fixed\"/><w:tblBorders><w:top w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/>"
        "<w:left w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/><w:bottom w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/>"
        "<w:right w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/><w:insideH w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/>"
        "<w:insideV w:val=\"single\" w:sz=\"4\" w:color=\"D9E2EF\"/></w:tblBorders></w:tblPr>"
        f"<w:tblGrid><w:gridCol w:w=\"{widths[0]}\"/><w:gridCol w:w=\"{widths[1]}\"/><w:gridCol w:w=\"{widths[2]}\"/></w:tblGrid>"
    )
    xml.append(row([
        cell("Mark", widths[0], "E8EEF5", "center", True, "1F4D78"),
        cell("Status", widths[1], "E8EEF5", "center", True, "1F4D78"),
        cell("Checklist item", widths[2], "E8EEF5", "left", True, "1F4D78"),
    ]))
    mark = "X" if status == "Done" else ""
    for item in items:
        xml.append(row([
            cell(mark, widths[0], "FFFFFF", "center", False, "1A1A2E"),
            cell(status, widths[1], status_fill, "center", True, status_color),
            cell(item, widths[2], "FFFFFF", "left", False, "1A1A2E"),
        ]))
    xml.append("</w:tbl>")
    xml.append(para("", after=80))
    return "".join(xml)


def page_break():
    return "<w:p><w:r><w:br w:type=\"page\"/></w:r></w:p>"


def document_xml():
    body = [
        para("Laser Marketing Implementation Checklist", None, True, "1A1A2E", 44, after=120),
        para("Status of recommendations from the laser dermatology marketing brief against the current codebase.", None, False, "5A5A72", 22, after=140),
        mixed_summary(len(done_items), len(partial_items), len(pending_items)),
        status_table("Done and Reflected in Code", done_items, "Done", "236B3A", "EEF8F0"),
        status_table("Partially Covered", partial_items, "Partial", "7A5A00", "FFF6D8"),
        page_break(),
        status_table("Pending / Not Reflected Yet", pending_items, "Pending", "9B1C1C", "FDECEC"),
    ]
    sect = (
        "<w:sectPr><w:pgSz w:w=\"12240\" w:h=\"15840\"/><w:pgMar w:top=\"1440\" w:right=\"1440\" "
        "w:bottom=\"1440\" w:left=\"1440\" w:header=\"708\" w:footer=\"708\" w:gutter=\"0\"/></w:sectPr>"
    )
    return (
        "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"
        "<w:document xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">"
        "<w:body>" + "".join(body) + sect + "</w:body></w:document>"
    )


def styles_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
    <w:pPr><w:spacing w:after="120" w:line="300" w:lineRule="auto"/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="22"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading2">
    <w:name w:val="heading 2"/><w:basedOn w:val="Normal"/>
    <w:pPr><w:keepNext/><w:spacing w:before="280" w:after="140"/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:b/><w:color w:val="2E74B5"/><w:sz w:val="26"/></w:rPr>
  </w:style>
</w:styles>"""


def content_types_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>"""


def rels_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>"""


def doc_rels_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>"""


def build_docx():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with ZipFile(OUTPUT, "w", ZIP_DEFLATED) as docx:
        docx.writestr("[Content_Types].xml", content_types_xml())
        docx.writestr("_rels/.rels", rels_xml())
        docx.writestr("word/document.xml", document_xml())
        docx.writestr("word/styles.xml", styles_xml())
        docx.writestr("word/_rels/document.xml.rels", doc_rels_xml())
    print(OUTPUT.resolve())


if __name__ == "__main__":
    build_docx()
