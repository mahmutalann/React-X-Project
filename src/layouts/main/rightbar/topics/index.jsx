import SidebarSection from "~/components/sidebar-section";
import {topics} from "~/utils/consts";
import Topic from "./topic";


export default function Topics() {
	return (
		<SidebarSection
			title="Agendas that may interest you"
			more="/trends"
		>
			{topics.map((topic, index) => <Topic item={topic} key={index}/>)}
		</SidebarSection>
	)
}