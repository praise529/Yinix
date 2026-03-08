import { Atom, Books, Calculator, GraduationCap } from "phosphor-react";

type SubjectTypes = "ALL" | "MATH" | "SCIENCE" | "LITERACY" | "LANGUAGE LEARNING" | "P.E." | "TECHNOLOGY" | "ARTS" | string

function FindSubject(Subject: SubjectTypes) {
    if (Subject === "MATH") {
        return <Calculator weight="bold" className="Icon"></Calculator>;
    } else if (Subject === "SCIENCE") {
        return <Atom weight="bold" className="Icon"></Atom>;
    } else if (Subject === "LITERACY") {
        return <Books weight="bold" className="Icon"></Books>;
    } else if (Subject === "LANGUAGE LEARNING") {
        return `<i class="ph-bold ph-translate"></i>`;
    } else if (Subject === "P.E.") {
        return `<i class="ph-bold ph-basketball"></i>`;
    } else if (Subject === "TECHNOLOGY") {
        return `<i class="ph-bold ph-cpu"></i>`;
    } else if (Subject === "ARTS") {
        return `<i class="ph-bold ph-palette"></i>`;
    } else {
        return <GraduationCap weight="bold" className="Icon"></GraduationCap>;
    }
}

export default FindSubject;