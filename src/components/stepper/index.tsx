import { Stepper } from 'react-form-stepper'

export default function CustomStepper(props: { activeStep: number }) {
    const { activeStep } = props
    return (
        <Stepper
            className=""
            steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }, { label: 'Step 5' }, { label: 'Step 6' }, { label: 'Step 7' }, { label: 'Step 8' }]}
            activeStep={activeStep}
            connectorStateColors={true}
            connectorStyleConfig={{
                completedColor: '#0162DD',
                activeColor: '#0162DD',
                disabledColor: '#eee'
            }}
            styleConfig={{
                activeBgColor: '#0162DD',
                completedBgColor: '#0162DD',
                inactiveBgColor: '#eee',
                activeTextColor: '#fff',
                completedTextColor: '#fff',
                inactiveTextColor: '#444'
            }}
        />
    )
}
