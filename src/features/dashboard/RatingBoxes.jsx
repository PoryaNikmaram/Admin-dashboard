import { Email, Phone, PointOfSale, Traffic } from '@mui/icons-material'
import DashboardBox from '../../ui/DashboardBox'

function RatingBoxes() {
  return (
    <>
      <DashboardBox
        icon={<Email />}
        amount="12361"
        subtitle="Emails Sent"
        progress={75}
        precent={14}
        size={40}
      />
      <DashboardBox
        icon={<Phone />}
        amount="431225"
        subtitle="Sails Obtained"
        progress={50}
        precent={21}
      />
      <DashboardBox
        icon={<PointOfSale />}
        amount="12361"
        subtitle="New Clients"
        progress={15}
        precent={14}
      />
      <DashboardBox
        icon={<Traffic />}
        amount="12361"
        subtitle="Traffic Received"
        progress={85}
        precent={14}
      />
    </>
  )
}

export default RatingBoxes
