const Footer = () => {
    const footerFeatures = [
        { title: "Support", items: ["Help Center", "Community", "Contact Us"] },
        { title: "Platform", items: ["Instructors", "Features", "Courses"] },
        { title: "Company", items: ["About", "Blog", "Privacy"] },
    ];
  return (
    <div className="bg-gray-800 py-16 text-white px-6 md:px-8 lg:px-16 mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center sm:text-left gap-8">
        <div className="md:max-w-[400px]">
            <h1 className="font-bold text-3xl">EduFlow</h1>
            <p>Empowering learners through accessible and engaging online education.</p>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-3 text-sm gap-8 mt-8 sm:mt-0">
            {footerFeatures.map((feature) => (
            <div key={feature.title}>
                <h2 className="font-semibold text-xl mb-2">{feature.title}</h2>
                <ul>
                    {feature.items.map((item) => (
                        <li key={item} className="mb-1 hover:underline cursor-pointer">{item}</li>
                    ))}
                </ul>
            </div>
             ))}
        </div>
      </div>
        <div className="border-t border-white mt-8 pt-4 text-sm text-center">
            &copy; {new Date().getFullYear()} EduFlow. All rights reserved.
        </div>
    </div>
  )
}

export default Footer
