import React from 'react'
 const masDepth = 5;
const renderDepthTitle = ({path}) =>{
    return (
        `Depth: ${path.length}`
    )
}

const treeData = [
    {
        title: `title`,
        subtitle: `subtitle`,
        expanded: true,
        children: [
            {
                title: `Child Node`,
                subtitle: `Define in 'children' props`
            },
            {
                title: 'Nested structure is rendered virtually',
                subtitle: (
                    <span>
                        The tree uses&nbsp
                        <a href="https://github.com/bvaughn/react-virtualized">React Virtualize</a>
                        &nbsp;and the relationship lines are more of a visual trick.
                    </span>
                ),
            },
        ],
    },
    {
        expanded: true,
        title: 'Any node can be the parent or child of any other node',
        children: [
            {
                expanded: true,
                title: 'Chicken',
                children: [{title:'Egg'}]
            }
        ]
    },
    {
        title: 'Button(s) can be added to the node',
        subtitle: 'Node info is passed when generating so you can use it in your onClick handler'
    },
    {
        title: 'show node children by `expanded`',
        subtitle: ({node}) => `expanden: ${node.expanded ? 'true': 'false'}`,
        children: [
            {
                title: 'Bruce',
                subtitle: ({ node }) => `expanded: ${node.expanded ? 'true': 'false'}`,
                children: [
                    {title:'Bruce Jr.'},
                    {title:'Brucetee'}
                ]
            }
        ]
    },
]

export default treeData