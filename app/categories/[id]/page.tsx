import React from 'react'
import GeneralKnowledgeComponent from '@/app/(Components)/(Quiz)/(categories)/GeneralKnowledge'
import MathComponent from '@/app/(Components)/(Quiz)/Math'
import GuessFlagsComponent from '@/app/(Components)/(Quiz)/GuessFlags'
import GuessLangComponent from '@/app/(Components)/(Quiz)/GuessLang'
import WeirdFactsComponent from '@/app/(Components)/(Quiz)/WeirdFacts'


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
    return (
        <div>
            {renderComponentCategories(params.id)}
        </div>
    )
}

export default SubCategoriespage
