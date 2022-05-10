import {Navbar as BootstrapNavbar, Nav as BootstrapNav, Container, Button} from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar(){
    return (
        <BootstrapNavbar bg="light" expand="sm" className="border-bottom container-fluid navbar shadow-sm">
            <Container fluid>
            <BootstrapNavbar.Brand href="/">
                Gatey
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Collapse id="navbarCollapse">
                <BootstrapNav className="justify-content-end" style={{ width: "100%" }}>
                    <Link href="/"><Button variant="outline-secondary">Home</Button></Link>&nbsp;
                    <Link href="https://dev.florgon.space/gatey"><Button variant="outline-secondary">Documentation</Button></Link>&nbsp;
                    <Link href="/dashboard"><Button variant="primary">Dashboard</Button></Link>
                </BootstrapNav>
            </BootstrapNavbar.Collapse>
            <BootstrapNavbar.Toggle aria-controls="navbarCollapse" />
            </Container>
        </BootstrapNavbar>
    )
}
