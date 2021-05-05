import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },

}));

function Home() {

    //States
    const classes = useStyles();
    const [details, setDetails] = useState({
        pincode: "",
        email: "",
        age18: false,
        age45: false,
        action: ""
    })


    useEffect(() => {
        if (details.action === "disable") {
            axios.post("https://4ay2n09npl.execute-api.ap-south-1.amazonaws.com/develop", details).then(function (response) {
                console.log(response.data);
                alert(response.data.body)
            }).catch(function (error) {
                console.log(error);
            })
            setDetails({
                pincode: "",
                email: "",
                age18: false,
                age45: false,
                action: ""
            })

        }
        else if (details.action === "enable") {
            axios.post("https://4ay2n09npl.execute-api.ap-south-1.amazonaws.com/develop", details).then(function (response) {
                console.log(response.data);
                alert(response.data.body)
            }).catch(function (error) {
                console.log(error);
            })
            setDetails({
                pincode: "",
                email: "",
                age18: false,
                age45: false,
                action: ""
            })
        }
    }, [details.action])


    //Functions
    function handleChange(e) {
        const { name, value } = e.target
        setDetails((PreviousValue) => {
            return {
                ...PreviousValue,
                [name]: value
            }
        })
    }

    function handleStart() {

        if(details.pincode==="" || details.pincode.length<6){
            alert("Enter 6 digit Pincode")
        }
        else if(details.email===""){
            alert("Enter Email")
        }
        else{
        setDetails((PreviousValue) => {
            return {
                ...PreviousValue,
                action: "enable"
            }
        })
    }
    }

    function handleStop() {
         if(details.email===""){
            alert("Enter Email")
        }
        else{
        setDetails((PreviousValue) => {
            return {
                ...PreviousValue,
                action: "disable"
            }
        })
    }
    }

    return (
        <div className="DetailForm">
            <h2>Details</h2>
            <form className={classes.root} Validate autoComplete="on">

                <div className="Container">
                    <TextField id="Mail" label="E-Mail" name="email" value={details.email} onChange={(e) => { handleChange(e) }} />
                    <TextField id="Pincode" label="Vaccination Centre Pincode" name="pincode" value={details.pincode} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="Agegroups">
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Age Group</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={details.age18} onChange={() => {
                                    setDetails((PreviousValue) => {
                                        return {
                                            ...PreviousValue,
                                            age18: !details.age18
                                        }
                                    }
                                    )
                                }
                                } name="age18" />}
                                label="18 to 44"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={details.age45} onChange={() => {
                                    setDetails((PreviousValue) => {
                                        return {
                                            ...PreviousValue,
                                            age45: !details.age45
                                        }
                                    }
                                    )
                                }} name="age45" />}
                                label="45+"
                            />
                        </FormGroup>
                    </FormControl>
                </div>

                <Button id="Start" onClick={handleStart} className="Submit" variant="contained" color="primary">Start</Button>
                <Button id="Stop" onClick={handleStop} className="Submit" variant="contained" color="primary">Stop</Button>
            </form>
            <a href="https://www.cowin.gov.in/home" target="_blank"><h3> Go to Cowin</h3></a>
        </div>
    )
}

export default Home
