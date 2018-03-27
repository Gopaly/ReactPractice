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
        <ServiceList  name='car service'/>
        <ServiceList  name='bus service'/>
        <ServiceList  name='plain service'/>
        <ServiceList  name='motor cycle service'/>
        <ServiceList  name='cycle service'/>
        <ServiceList  name='other service'/>
    </div>
)

export default Services