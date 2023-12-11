import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function NavbarComponent() {
    const expand = false;
    const [toggleDropdown, setToggleDropdown] = useState({isShowEmployees: false, isShowAttendance: false, isShowPayroll: false, isShowReports: false, isShowJob: false});
    return (
        <>
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                <Container fluid style={{justifyContent: 'left'}}>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Brand><img width="200px" style={{marginLeft: '15px'}} src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png"/></Navbar.Brand>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link>Dashboard</Nav.Link>
                                <NavDropdown title="Employees" id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowEmployees}`} onClick={() => setToggleDropdown({...toggleDropdown, isShowEmployees: !toggleDropdown.isShowEmployees})}>
                                    <NavDropdown.Item>Employee Create</NavDropdown.Item>
                                    <NavDropdown.Item>Employee List</NavDropdown.Item>
                                    <NavDropdown.Item>Employee Imports</NavDropdown.Item>
                                    <NavDropdown.Item>Awards List</NavDropdown.Item>
                                    <NavDropdown.Item>Notice List</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Attendance" id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowAttendance}`} onClick={() => setToggleDropdown({...toggleDropdown, isShowAttendance: !toggleDropdown.isShowAttendance})}>
                                    <NavDropdown.Item>Attendance Import</NavDropdown.Item>
                                    <NavDropdown.Item>Manual Punching</NavDropdown.Item>
                                    <NavDropdown.Item>Leave Application</NavDropdown.Item>
                                    <NavDropdown.Item>Absent Details</NavDropdown.Item>
                                    <NavDropdown.Item>Attendance Verification</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Payroll" id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowPayroll}`} onClick={() => setToggleDropdown({...toggleDropdown, isShowPayroll: !toggleDropdown.isShowPayroll})}>
                                    <NavDropdown.Item>Payslip</NavDropdown.Item>
                                    <NavDropdown.Item>Salary Setup</NavDropdown.Item>
                                    <NavDropdown.Item>Salary Process</NavDropdown.Item>
                                    <NavDropdown.Item>Employee Loan</NavDropdown.Item>
                                    <NavDropdown.Item>Employee Conveyance</NavDropdown.Item>
                                    <NavDropdown.Item>Tax File Upload</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Reports" id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowReports}`} onClick={() => setToggleDropdown({...toggleDropdown, isShowReports: !toggleDropdown.isShowReports})}>
                                    <NavDropdown.Item>Attendance</NavDropdown.Item>
                                    <NavDropdown.Item>Payslip Bulk Download</NavDropdown.Item>
                                    <NavDropdown.Item>Monthly Salary</NavDropdown.Item>
                                    <NavDropdown.Item>Yearly Salary</NavDropdown.Item>
                                    <NavDropdown.Item>Salary Deduction Details</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Reports" id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowJob}`} onClick={() => setToggleDropdown({...toggleDropdown, isShowJob: !toggleDropdown.isShowJob})}>
                                    <NavDropdown.Item>Candidate Create</NavDropdown.Item>
                                    <NavDropdown.Item>Candidate List</NavDropdown.Item>
                                    <NavDropdown.Item>Job Openings List</NavDropdown.Item>
                                    <NavDropdown.Item>Job Application List</NavDropdown.Item>
                                    <NavDropdown.Item>Trainings List</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent;