import React, { useContext } from 'react'
import { LangContext } from '../../contexts/LangContext'

const Text = ({tid}) => {
    const lang = useContext(LangContext)
    return lang.dictionary[tid] || tid
}

export default Text
