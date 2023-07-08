import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ClipboardIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import ScissorPage from "./Sccissors";
import { account, database } from "../appwrite/appwrite";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/Logo (1).svg";
import { Query } from "appwrite";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

// console.log(process.env.REACT_APP_PROJECT);

export default function Dashboard() {
    const user = {
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    };

  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "/qrcode" },
    { name: "Sign out 👋", href: "#", handleClick: () => logout() },
  ];

//   ======================

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [links, setLinks] = useState([]);
  const [copied, setCopied] = useState(false);

  //used as a dependency for the useEffect hook to cause rerender
  const [addedLink, setAddedLink] = useState(false);

  useEffect(() => {
    const fetchUserAccount = async () => {
      try {
        const response = await account.get();
        setUserDetails(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserAccount();
  }, []);

  //handle getting links related to user
  useEffect(() => {
    const getUserLinks = async () => {
      try {
        if (userDetails) {
          const response = await database.listDocuments(
            "64a53ec48e4180d1974f", // databaseId
            "64a571a6a707796b8515",
            [Query.equal("user_id", [userDetails.$id])] // query to get only user links
          );
          setLinks(response.documents);
        }
      } catch (error) {
        alert(error);
      }
    };

    getUserLinks();
  }, [addedLink, userDetails]);

  const renderedLinks = links?.map((link) => {
    const copyText = () => {
      navigator.clipboard.writeText(link.link);

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };

    // update links state withour the removed link
    const removeLink = (id) => {
      const updatedLinks = links?.filter((link) => {
        return link.$id !== id;
      });
      setLinks(updatedLinks);
    };

    //remove link from database
    const deleteLink = async () => {
      const promise = database.deleteDocument(
        "64a53ec48e4180d1974f", // databaseId
        "64a571a6a707796b8515",
        link.$id
      );
      promise.then(
        function (response) {
          console.log(response);
          removeLink(link.$id);
        },
        function (error) {
          alert(error);
        }
      );
    };

    return (
      <>
        <div
          key={link.$id}
          className="flex justify-between items-center my-3 w-full"
        >
          <p className="font-bold text-sm md:text-base text-lightBlue">
            <a href={link.link}>{link.link}</a>
          </p>
          <div className="flex gap-4">
            <ClipboardIcon
              className="h-6 w-6 text-green-700"
              aria-hidden="true"
              onClick={copyText}
            />
            <TrashIcon
              onClick={deleteLink}
              className="h-6 w-6 text-pink-700"
              aria-hidden="true"
            />
          </div>
        </div>
        <hr />
      </>
    );
  });

  const logout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-[#F9FBFD] sticky top-0">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-auto block"
                          src={Logo}
                          alt="Your Company"
                        />
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <button
                          type="button"
                          className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      onClick={item.handleClick}
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="border-t border-gray-700 pb-3 pt-4 bg-gray-800 sticky top-0">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base leading-none text-white font-bold">
                          {userDetails.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {userDetails.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full p-1 text-gray-400"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        Your Profile
                      </Disclosure.Button>
                      <Link to="/qrcode">
                        <Disclosure.Button
                          as="a"
                          href="#"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          Generate QR Code
                        </Disclosure.Button>
                      </Link>
                      <Disclosure.Button
                        onClick={logout}
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        Sign out 👋
                      </Disclosure.Button>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 pt-6 pb-3 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-600 mb-1">
                Dashboard
              </h1>
              <h3>
                Welcome{" "}
                <span className="font-bold text-lightBlue">
                  {userDetails?.name} 😊
                </span>
              </h3>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl md:py-6 sm:px-6 lg:px-8">
              <ScissorPage
                user={userDetails}
                setAddedLink={() => setAddedLink(!addedLink)}
              />
              <hr />
              <div className="px-10 md:px-16 md:w-[600px] mx-auto pt-4 bg-[#F9FBFD]">
                <h1 className="text-xl font-bold tracking-tight text-gray-600 mb-1">
                  Recent links
                </h1>
                <div className="flex justify-center mx-auto flex-col">
                  {renderedLinks}
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center mt-[45%]">
          {/* <p className="mt-4 text-xl">Please Login to see profile </p>
          <Link to="/login">
            <span className="bg-lightBlue py-3 px-12 rounded-[12px] cursor-pointer text-white">
              Login
            </span>
          </Link> */}
          <ArrowPathIcon
            className="h-20 w-20 text-gray-600 font-bold mx-auto animate-spin"
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
}
