import ResourcesPage from '@/components/ResourcesAndLib'
import prisma from '@/lib/prisma';
import React from 'react'

const Resources = async () => {
  const resources = await prisma.resource.findMany();

  return (
    <div>
      <ResourcesPage resources={resources}/>
    </div>
  )
}

export default Resources
