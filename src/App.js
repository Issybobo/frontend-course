
import './index.css';
import Employee from './components/Employee'
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmploye';
import EditEmployee from './components/EditEmployee';

function App() {
  
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Israel',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg'
    },
    {
      id: 2,
      name: 'James',
      role: 'Marketer',
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?'
    },
    
    {
      id: 3,
      name: 'Paul',
      role: 'Admin',
      img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?'
    },
    {
      id: 4,
      name: 'Issy',
      role: 'Designer',
      img: 'https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg'
    },
    {
      id: 5,
      name: 'Olamide',
      role: 'Manager',
      img: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg'
    },
    {
      id: 6,
      name: 'Ola',
      role: 'Intern',
      img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
    },
  ])

  /*function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      //setEmployees(updatedEmployees)
      if (id === employees.id) {
        return{ ...employee, name: newName, role: newRole};
      }
      return employee;
    });

   // console.log('updateEmployee inside of app.js');
  }*/

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return{ ...employee, name: newName, role: newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployees);
   }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true
  return (
    <div className="App">
    
    {showEmployees ? (
      <>
      <input 
             type= "text" 
             onChange = {(e) => {
              //console.log(e.target.value);
              setRole(e.target.value);
             }}
            />
        
      <div  className='flex flex-wrap justify-center'>
        {employees.map((employee) => {
          const editEmployee = (
            <EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee = {updateEmployee}/>
          );

        
          //console.log(uuidv4());
        
          return(
            <Employee 
            key ={employee.id}
            id= {employee.id}
            name = {employee.name}
            role = {employee.role}
            img = {employee.img}
            updateEmployee={updateEmployee}
            />
          );
        })}
      </div>

      <AddEmployee newEmployee= {newEmployee}/>
        </>
        
    ):(
      <p>You cannot see the employee</p>
    
    )}
        
    </div>
  );
}

export default App; 


