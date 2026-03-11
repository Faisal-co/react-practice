import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'
function App() {
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App









/*const App = () => {
return (
      <div>
        <Header />
      <Button />
      </div>
      
)
}
export default App*/

  /*return (
    <div className="parent">
      {arr.map(function(elem){
        return <User a = {elem.user} />
      // return <Card a = {elem.user} age = {elem.age}
      // img = {elem.i} />

})}
    </div>
      
)
}
*/



 /* <div className="parent">
  <Card heading = "xyz" age = {26} img = "https://images.unsplash.com/photo-1771261799195-466eb30d9669?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  <Card heading = "MNO" age = "abc" img = "https://images.unsplash.com/photo-1741454570867-4a10f31fc5e3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <Card heading = "Faisal" age = {5464.89} img = "https://images.unsplash.com/photo-1768479397383-49806c934167?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <Card heading = "Siraj" age = {69} img = "https://images.unsplash.com/photo-1768479397383-49806c934167?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  </div> */
  /*<div className="parent">
    
    <User name = {arr[0]}/>  
    <User name = {arr[3]}/>  
    <User name = {arr}/> 
  </div>
  <div className="parent">
    {arr.map(function(elem){
    return <User myname = {elem} />
  })}
  </div>*/
  /*
  const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Node.js Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1772209625133-9f453c99f5bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    companyName: "Airbnb",
    datePosted: "10 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "San Francisco, USA"
  }
];
return (
  <div className="parent">
    {jobOpenings.map(function(elem, index){
    return <div key = {index}>
    <Card post = {elem.post} company = {elem.companyName} pay = {elem.pay} image = {elem.brandLogo} />
    </div>
  })}
  </div>

)
}*/
  
   
  