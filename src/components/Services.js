import React from 'react'

function ServiceTitle(){
    return (
          <h4 className="Dialog-title">
                Welcome to Services page these are the list of services given by us
          </h4>
        );
}
class ServiceList extends React.Component{
    render(){
        return <li> {this.props.name}</li>
        
    }
}
const Services = () => (
    <div>
        <ServiceTitle />
        <ServiceList  name='service_1'/>
        <ServiceList  name='service_2'/>
        <ServiceList  name='service_3'/>
        <ServiceList  name='service_4'/>
        <ServiceList  name='service_5'/>
        <ServiceList  name='service_6'/>
    </div>
)

export default Services
