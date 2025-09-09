import React from "react";

const Service = () => {
    return (
        <section className="pb-12 pt-20 bg-black lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                {/* Section Title */}
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Our Services
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]">
                                Work Smarter with WorkHub
                            </h2>
                            <p className="text-base text-gray-400">
                                WorkHub is your all-in-one virtual office where your team can
                                collaborate, communicate, and stay productive — anywhere in the
                                world.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="flex flex-wrap">
                    <ServiceCard
                        title="Video Meetings"
                        details="High-quality video calls and virtual meetings to stay connected with your team anytime, anywhere."
                        image="https://tse2.mm.bing.net/th/id/OIP.27BSZiMNnuw4-YyhjNHpzgHaEK?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
                    />
                    <ServiceCard
                        title="Team Chat"
                        details="Instant messaging and group chat channels to keep conversations flowing and organized."
                        image="https://tse2.mm.bing.net/th/id/OIP.n3bIVFEhMH3DKqvfnutuHwHaFj?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
                    />
                    <ServiceCard
                        title="Assignments"
                        details="Assign tasks, track progress, and boost productivity with a powerful task management system."
                        image="https://pix4free.org/assets/library/2021-07-05/originals/assignments.jpg"
                    />
                    <ServiceCard
                        title="Presentations"
                        details="Share and present your ideas with built-in slide and screen sharing features."
                        image="https://tse3.mm.bing.net/th/id/OIP.G_TnXMa4rBOX48bOtbHG1wHaE7?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
                    />
                    <ServiceCard
                        title="Calendar"
                        details="Schedule meetings, set reminders, and sync your calendar to stay on top of your day."
                        image="https://calendarinspirationdesign.com/wp-content/uploads/2020/01/exemplary-print-google-calendar-on-11x17-mini-calendar-3.png"
                    />
                    <ServiceCard
                        title="Text Editor"
                        details="Collaborative online editor for documents, notes, and real-time writing with your team."
                        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    />
                </div>
            </div>
        </section>
    );
};

export default Service;

const ServiceCard = ({ image, title, details }) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-[20px] bg-gray-900 p-10 shadow-md hover:shadow-xl md:px-7 xl:px-10 border border-gray-700">
                {/* Image */}
                <div className="mb-8 h-[70px] w-[70px] overflow-hidden rounded-2xl">
                    <img src={image} alt={title} className="h-full w-full object-cover" />
                </div>

                <h4 className="mb-[14px] text-2xl font-semibold text-white">
                    {title}
                </h4>
                <p className="text-gray-400">{details}</p>
            </div>
        </div>
    );
};
