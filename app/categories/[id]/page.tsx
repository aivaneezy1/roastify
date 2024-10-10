"use client"
import React from 'react'
import GeneralKnowledgeComponent from '@/app/(Components)/(Quiz)/(categories)/GeneralKnowledge'
import MathComponent from '@/app/(Components)/(Quiz)/(categories)/Math'
import GuessFlagsComponent from '@/app/(Components)/(Quiz)/(categories)/GuessFlags'
import GuessLangComponent from '@/app/(Components)/(Quiz)/(categories)/GuessLang'
import WeirdFactsComponent from '@/app/(Components)/(Quiz)/(categories)/WeirdFacts'
import { useContext, useEffect } from 'react'
import { DatiContext } from '@/app/providers/DataProvider'

const renderComponentCategories = (id: string) => {
    switch (id) {
        case "general-knowledge":
            return <GeneralKnowledgeComponent />
        case "math":
            return <MathComponent />
        case "guess-the-flags":
            return <GuessFlagsComponent />
        case "guess-the-language":
            return <GuessLangComponent />
        case "weird-facts":
            return <WeirdFactsComponent />

    }
}
const SubCategoriespage = ({ params }: { params: { id: string } }) => {
    /*Getting the dynamic directory for categories */
    const { setSelectedCategories } = useContext(DatiContext);

    useEffect(() => {
        setSelectedCategories(params.id);
    }, [params.id]);

    return (
        <div>
            {renderComponentCategories(params.id)}

        </div>
    )
}

export default SubCategoriespage
