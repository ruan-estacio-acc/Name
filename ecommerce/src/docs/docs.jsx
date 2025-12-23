import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import { DocsLayoutStyle } from "./docs.styles";   
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SearchBar } from "./components/SearchBar/Searchbar";
import { Body } from "./components/BodyContent/BodyContent";

function Docs () {
    return (
        <>
        <DocsLayoutStyle />
        <GlobalStyle />     
        <Body />
        <SearchBar />
        <Sidebar />
        </>
    )
}

export default Docs;