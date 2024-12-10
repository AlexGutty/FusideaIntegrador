import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon as XIcon, ClockIcon, UserIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const TradeModal = ({ isOpen, onClose, trade }) => {
  if (!trade) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-[#4c9141]">
                Trade Details
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-2">
                  <ClockIcon className="h-5 w-5 inline mr-2" />
                  Duration: {trade.duration} days
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <UserIcon className="h-5 w-5 inline mr-2" />
                  Status: {trade.status}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <AcademicCapIcon className="h-5 w-5 inline mr-2" />
                  Member One Specialty: {trade.memberOne_specialty}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <AcademicCapIcon className="h-5 w-5 inline mr-2" />
                  Member Two Specialty: {trade.memberTwo_specialty}
                </p>
                <p className="text-sm text-gray-500">
                  Expires at: {new Date(trade.expiresAt).toLocaleString()}
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={onClose}
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TradeModal;


