import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, FormControl, FormGroup, FormLabel, FormFeedback } from 'react-bootstrap';

function EmployeeCreate() {
    const { handleSubmit, control, register, formState: { errors } } = useForm();

    const addEmployeeFn = (data) => {
        console.log(data);
    };
    return (
        <Container>
            <Form onSubmit={handleSubmit(addEmployeeFn)} noValidate>
                <h2>Create Employee</h2>
                <Row>
                    <Col>
                        <Form.Group style={{marginBottom: '41px'}} controlId="employeeNo">
                            <Form.Label>Employee No</Form.Label>
                            <Controller
                                name="employeeNo"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Employee no is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control {...field} placeholder="Enter your employee no" isInvalid={errors.employeeNo} />
                                        <Form.Control.Feedback type="invalid">{errors.employeeNo && errors.employeeNo.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                        <Form.Group style={{marginBottom: '41px'}} controlId="cardNo">
                            <Form.Label>Card No (8 digits only)</Form.Label>
                            <Controller
                                name="cardNo"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Card no is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control {...field} placeholder="Enter your card no" isInvalid={errors.cardNo} />
                                        <Form.Control.Feedback type="invalid">{errors.cardNo && errors.cardNo.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fullName">
                            <Form.Label>Full Name</Form.Label>
                            <Controller
                                name="fullName"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Fullname is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control {...field} placeholder="Enter your fullname" isInvalid={errors.fullName} />
                                        <Form.Control.Feedback type="invalid">{errors.fullName && errors.fullName.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fatherName">
                            <Form.Label>Father Name</Form.Label>
                            <Controller
                                name="fatherName"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Fathername is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control {...field} placeholder="Enter your fathername" isInvalid={errors.fatherName} />
                                        <Form.Control.Feedback type="invalid">{errors.fatherName && errors.fatherName.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Email is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control type="email" {...field} placeholder="Enter your email" isInvalid={errors.email} />
                                        <Form.Control.Feedback type="invalid">{errors.email && errors.email.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="presentAddress">
                            <Form.Label>Present Address</Form.Label>
                            <Controller
                                name="presentAddress"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Present Address is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control as="textarea" rows={2} {...field} placeholder="Enter your present address" isInvalid={errors.presentAddress} />
                                        <Form.Control.Feedback type="invalid">{errors.presentAddress && errors.presentAddress.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="permanentAddress">
                            <Form.Label>Permanent Address</Form.Label>
                            <Controller
                                name="permanentAddress"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Permanent Address is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control as="textarea" rows={2} {...field} placeholder="Enter your permanent address" isInvalid={errors.permanentAddress} />
                                        <Form.Control.Feedback type="invalid">{errors.permanentAddress && errors.permanentAddress.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Controller
                                name="city"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'City is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Select aria-label="Default select example" {...field} isInvalid={errors.city}>
                                            <option>Select City</option>
                                            <option value="hyderabad">Hyderabad</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="pune">Pune</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">{errors.city && errors.city.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pincode">
                            <Form.Label>Pincode</Form.Label>
                            <Controller
                                name="pincode"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Pincode is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control {...field} placeholder="Enter your pincode" isInvalid={errors.pincode} />
                                        <Form.Control.Feedback type="invalid">{errors.pincode && errors.pincode.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="companyName">
                            <Form.Label>Company Name</Form.Label>
                            <Controller
                                name="companyName"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Company Name is required' }}
                                render={({ field }) => (
                                    <>
                                        <Form.Select aria-label="Company Name" {...field} isInvalid={errors.companyName}>
                                            <option>Select Company</option>
                                            <option value="hyderabad">Digital Lync</option>
                                            <option value="hyderabad">Digital Edify</option>
                                            <option value="hyderabad">Nexa</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">{errors.companyName && errors.companyName.message}</Form.Control.Feedback>
                                    </>
                                )}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit">Create Employee</Button>
            </Form>
        </Container>
    )
}

export default EmployeeCreate;