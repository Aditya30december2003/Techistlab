import React from 'react';

const TermsLayout = () => {
  const navItems = [
    { id: 1, text: 'Who We Are and How to Contact Us', path: '#contact' },
    { id: 2, text: 'By Using Our Site You Accept These Terms', path: '#acceptance' },
    { id: 3, text: 'There Are Other Terms That May Apply to You', path: '#other-terms' },
    { id: 4, text: 'We May Make Changes to These Terms', path: '#changes-terms' },
    { id: 5, text: 'We May Make Changes to Our Site', path: '#changes-site' },
    { id: 6, text: 'We May Suspend or Withdraw Our Site', path: '#suspension' },
    { id: 7, text: 'We May Transfer This Agreement to Someone Else', path: '#transfer' },
    { id: 8, text: 'Our Site Is Only for Users in the UK', path: '#uk-users' },
    { id: 1, text: 'Who We Are and How to Contact Us', path: '#contact' },
    { id: 2, text: 'By Using Our Site You Accept These Terms', path: '#acceptance' },
    { id: 3, text: 'There Are Other Terms That May Apply to You', path: '#other-terms' },
    { id: 4, text: 'We May Make Changes to These Terms', path: '#changes-terms' },
    { id: 5, text: 'We May Make Changes to Our Site', path: '#changes-site' },
    { id: 6, text: 'We May Suspend or Withdraw Our Site', path: '#suspension' },
    { id: 7, text: 'We May Transfer This Agreement to Someone Else', path: '#transfer' },
    { id: 8, text: 'Our Site Is Only for Users in the UK', path: '#uk-users' }
  ];

  const contentSections = [
    {
      id: 'contact',
      title: 'Who We Are and How to Contact Us',
      content: 'Iwalewah.com is a site operated by Iwalewah Group ("We"). We are registered in England and Wales under company number 13823302 and have our registered office at Suite 08, 3 Pavilion Parade, Wood Lane, London W12 0HQ.'
    },
    {
      id: 'acceptance',
      title: 'By Using Our Site You Accept These Terms',
      content: 'By using our site, you confirm that you accept these terms of use and that you agree to comply with them. If you do not agree to these terms, you must not use our site.'
    },
    {
      id: 'other-terms',
      title: 'There Are Other Terms That May Apply to You',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
    },
    {
      id: 'changes-terms',
      title: 'We May Make Changes to These Terms',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
    },
    {
      id: 'changes-site',
      title: 'We May Make Changes to Our Site',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
    },
    {
      id: 'suspension',
      title: 'We May Suspend or Withdraw Our Site',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
    },
    {
      id: 'transfer',
      title: 'We May Transfer This Agreement to Someone Else',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
    },
    {
      id: 'uk-users',
      title: 'Our Site Is Only for Users in the UK',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
    },
    {
        id: 'contact',
        title: 'Who We Are and How to Contact Us',
        content: 'Iwalewah.com is a site operated by Iwalewah Group ("We"). We are registered in England and Wales under company number 13823302 and have our registered office at Suite 08, 3 Pavilion Parade, Wood Lane, London W12 0HQ.'
      },
      {
        id: 'acceptance',
        title: 'By Using Our Site You Accept These Terms',
        content: 'By using our site, you confirm that you accept these terms of use and that you agree to comply with them. If you do not agree to these terms, you must not use our site.'
      },
      {
        id: 'other-terms',
        title: 'There Are Other Terms That May Apply to You',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'changes-terms',
        title: 'We May Make Changes to These Terms',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'changes-site',
        title: 'We May Make Changes to Our Site',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'suspension',
        title: 'We May Suspend or Withdraw Our Site',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'transfer',
        title: 'We May Transfer This Agreement to Someone Else',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'uk-users',
        title: 'Our Site Is Only for Users in the UK',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'contact',
        title: 'Who We Are and How to Contact Us',
        content: 'Iwalewah.com is a site operated by Iwalewah Group ("We"). We are registered in England and Wales under company number 13823302 and have our registered office at Suite 08, 3 Pavilion Parade, Wood Lane, London W12 0HQ.'
      },
      {
        id: 'acceptance',
        title: 'By Using Our Site You Accept These Terms',
        content: 'By using our site, you confirm that you accept these terms of use and that you agree to comply with them. If you do not agree to these terms, you must not use our site.'
      },
      {
        id: 'other-terms',
        title: 'There Are Other Terms That May Apply to You',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'changes-terms',
        title: 'We May Make Changes to These Terms',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'changes-site',
        title: 'We May Make Changes to Our Site',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'suspension',
        title: 'We May Suspend or Withdraw Our Site',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'transfer',
        title: 'We May Transfer This Agreement to Someone Else',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      },
      {
        id: 'uk-users',
        title: 'Our Site Is Only for Users in the UK',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae assumenda placeat aut. Quibusdam, praesentium! Culpa labore consequatur ea fuga.'
      }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mb-0 lg:mb-[23rem]">
      <div className="flex gap-10 py-8">
        {/* Left Navigation */}
        <div className="w-[30%] h-screen sticky top-0 hidden md:block">
          <nav>
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li 
                  key={item.id} 
                  className="relative"
                >
                  {item.id === 1 && (
                    <div className="absolute -left-4 top-0 h-full w-1 bg-purple-500"></div>
                  )}
                  <a
                    href={item.path}
                    className=" text-lg font-medium hover:text-purple-700 duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[70%]">
          {contentSections.map((section) => (
            <section key={section.id} id={section.id} className="mb-16">
              <h2 className="text-3xl font-medium mb-8">
                {section.title}
              </h2>
              <p className="text-[1rem] lg:text-lg leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsLayout;