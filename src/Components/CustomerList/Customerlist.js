import React, { useEffect, useState } from 'react'
import { data } from '../../data.js'
import "./Customerlist.css";
import del from "../CustomerList/del.jpg"
import edit from "../CustomerList/edit.png"
import signup from "../CustomerList/signup.jpg"
//import { Customer } from '../../Customer.js';

// interface Props{
//     custobj:Customer;
// }

const CustomerList = () => {

    //int i=5;
    const [i,seti]=useState(5);
    const [customers, setcustomer] = useState([data]);

    //var newcustomer={Cid:0,Cname:'',DOJ:new Date(),CAdd:'',Bal:0};
    const [Cid, setCid] = useState('');
    const [Cname, setCname] = useState('');
    const [DOJ, setDoj] = useState('');
    const [CAdd, setCAdd] = useState('');
    const [Bal, setBal] = useState('');

   // const [newcustomer, setnewcustomer] = useState({ Cid: 0, Cname:'' , DOJ: new Date(), CAdd: '', Bal: 0 });
    const handleCid = (event) => {
        setCid(event.target.value);
        // setnewcustomer({...newcustomer,Cid:event.taget.value})
    }
    const handleCname = (event) => {
        setCname(event.target.value);
        //setnewcustomer({...newcustomer,Cname:event.taget.value})
    }
    const handleDoj = (event) => {
        setDoj(event.target.value);
        // setnewcustomer({...newcustomer,DOJ:event.taget.value})
    }
    const handleCAdd = (event) => {
        setCAdd(event.target.value);
        //setnewcustomer({...newcustomer,CAdd:event.taget.value})
    }
    const handleBal = (event) => {
        setBal(event.target.value);
        //setnewcustomer({...newcustomer,Bal:event.taget.value})
    }


    const updatecustomer = (id) => {
        alert(id);
        console.log(id);
        const cust = customers.find(x => x.Cid == id);
        console.log(cust);
        setCid(cust.Cid);
        setCname(cust.Cname);
        setBal(cust.Bal);
        setCAdd(cust.CAdd);
        setDoj(cust.DOJ);
    }

    const Save = () => {
         const newcustomerlist = customers.filter(x => x.Cid !== Cid);
         setcustomer([...newcustomerlist, { Cid: Cid, Cname: Cname, DOJ: DOJ, CAdd: CAdd, Bal: Bal }]);
        //deletecustomer(cust.Cid);
        //register();


    }
    const reset = () => {
        setCid(0);
        setCname("");
        setDoj("");
        setCAdd("");
        setBal(0);
    }

    const register = () => {

        // setnewcustomer(newcustomer);
        // setcustomer([...customers,newcustomer]);
        //data.push({Cid:Cid,Cname:Cname,DOJ:DOJ,CAdd:CAdd,Bal:Bal});
        setcustomer([...customers, { Cid: Cid, Cname: Cname, DOJ: DOJ, CAdd: CAdd, Bal: Bal }])
        reset();
    }
    const deletecustomer = (id) => {
        alert(id);
        const newlist = customers.filter(x => x.Cid != id);
        setcustomer(newlist);
        console.log(newlist);
    }

    useEffect(() => {
        setcustomer(data);
        console.log(customers);
    }, []);
    return (
        <div>
            <h4>
                <img className="i1" src={signup} height="30" width="30" alt="Signup" onClick={() => register()} /><br/>
                              <div style={{"color":"blue","margin-left":30}}> Signup </div>
            </h4>
            
            <div>
                Cid: <input type="number" value={Cid} onChange={handleCid} /><br />
                Name: <input type="text" value={Cname} onChange={handleCname} /><br />
                Date Of Joining: <input type="date" value={DOJ} onChange={handleDoj} /><br />
                Address: <input type="text" value={CAdd} onChange={handleCAdd} /><br />
                Balance: <input type="number" value={Bal} onChange={handleBal} /><br /><br/>
            </div>
            <button style={{"margin-left":50}} type="submit" onClick={() => Save()}>Save</button>
            <h1> Customer Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th> Customer ID </th>
                        <th> Customer Name </th>
                        <th> Date Of Joining</th>
                        <th> Address </th>
                        <th> Balance</th>
                        <th colspan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td >{item.Cid}</td>
                                <td>{item.Cname}</td>
                                <td>{item.DOJ}</td>
                                <td>{item.CAdd}</td>
                                <td>{item.Bal}</td>
                                <td><img src={edit} height="30" width="30" onClick={() => updatecustomer(item.Cid)} /></td>
                                <td><img src={del} height="30" width="30" onClick={() => deletecustomer(item.Cid)} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>

        </div>
    );
}


export default CustomerList;