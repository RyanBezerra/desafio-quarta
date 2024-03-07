import Nav from "./Nav"
export default function Header(){
    return(
        <div className="flex gap-x-4 justify-center ">
            <Nav titulo = "Inicio" url = "/"></Nav>
            <Nav titulo = "Walace" url = "/walace"></Nav>
            <Nav titulo = "Sobre" url = "/sobre"></Nav>
        </div>
    )
}