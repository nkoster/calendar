import {createPortal} from 'react-dom'
import './ModalAppointment.css'
import {State, StateDispatch, updateAppointment} from '../state'

export function ModalAppointment() {

  const {appointment} = State()
  const dispatch = StateDispatch()

  const click = () => updateAppointment(dispatch, false)

  return appointment.showModal ? createPortal(
    <>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={click}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>
            {appointment.startTime}
          </p>
        </div>
      </div>
    </>, document.body
  ) : null

}
