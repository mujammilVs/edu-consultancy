"use client";

import CourseFinder from "@/components/CourseFinder";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export default function CoursesPage() {
    return (
        <div className="pt-20">
            <CourseFinder />
            <FAQSection />
            <CTASection />
        </div>
    );
}
