import React from 'react'

export default class FhirMedicationStatement extends React.Component {

  render () {
    debugger
    return (
      <div className='tile'>
        <h2 className='primarycolor' style={{display: 'inline-block'}}>
          {this.props.resource.medicationCodeableConcept && this.props.resource.medicationCodeableConcept.coding ? <span>{this.props.resource.medicationCodeableConcept.coding[0].display} {this.props.resource.medicationCodeableConcept.coding[0].code}</span> : this.props.resource.medicationCodeableConcept.text}
        </h2>
        &nbsp;&nbsp;&nbsp;
        <h3 style={{display: 'inline-block'}}>{this.props.resource.status}</h3>
        <table>
          <tbody>
            {typeof this.props.resource.dateAsserted === 'undefined' ? '' : (
              <tr>
                <td><strong>Date Asserted</strong></td>
                <td>{this.props.resource.dateAsserted.slice(0,10)}</td>
                </tr>
            )}
            {typeof this.props.resource.dosage[0].text === 'undefined' ? '' : (
              <tr>
                <td><strong>Dosage</strong></td>
                <td>{this.props.resource.dosage[0].text}</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
