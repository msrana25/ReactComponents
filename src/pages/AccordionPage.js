import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'wgfkelf',
            label: 'Can I use React on a project',
            content: 'You can use React any project you want.You can use React any project you want.You can use React any project you want.'

        },
        {
            id: 'wgfkelfiehff',
            label: 'Can I use JavaScript on a project',
            content: 'You can use React any project you want.You can use React any project you want.You can use React any project you want.'
        },
        {
            id: 'abcde',
            label: 'Can I use CSS on a project',
            content: 'You can use React any project you want.You can use React any project you want.You can use React any project you want.'

        }
    ]

    return <Accordion items={items} />


}

export default AccordionPage;