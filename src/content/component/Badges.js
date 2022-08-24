import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Badges() {
  return (
    <div className="w-full rounded-full relative">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-full text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <span>Badge result : </span>
                <span className='flex gap-2'>
                  <span className="flex w-fit rounded-full bg-green-300 text-green-600 px-1">Bijak</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                  />
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-4 px-4 pt-4 pb-2 text-sm text-gray-500">
                <span className='text-xs text-left text-gray-500'>Agustus - Minggu Pertama</span>
                <span className='flex gap-8 justify-between'>
                  <span className='flex flex-col gap-2 h-full w-fit'>
                    <span className="flex w-fit h-5 rounded-full bg-green-300 text-green-600 px-1">Bijak</span>
                    <span className="flex w-fit h-5 rounded-full bg-indigo-300 text-indigo-600 px-1">Cerdas</span>
                    <span className="flex w-fit h-5 rounded-full bg-yellow-300 text-yellow-600 px-1">Pelawak</span>
                    <span className="flex w-fit h-5 rounded-full bg-blue-300 text-blue-600 px-1">Biasa</span>
                    <span className="flex w-fit h-5 rounded-full bg-red-300 text-red-600 px-1">Nakal</span>
                  </span>
                  <span className='flex flex-col gap-2 h-full w-full items-between'>
                    <span className="flex w-full h-5 rounded-full bg-gray-300">
                      <span className="flex w-full h-5 rounded-full bg-green-300 justify-end p-1 text-xs text-green-600">103</span>
                    </span>
                    <span className="flex w-full h-5 rounded-full bg-gray-300">
                      <span className="flex w-3/5 h-5 rounded-full bg-indigo-300 justify-end p-1 text-xs text-indigo-600">67</span>
                    </span>
                    <span className="flex w-full h-5 rounded-full bg-gray-300">
                      <span className="flex w-2/5 h-5 rounded-full bg-yellow-300 justify-end p-1 text-xs text-yellow-600">43</span>
                    </span>
                    <span className="flex w-full h-5 rounded-full bg-gray-300">
                      <span className="flex w-1/5 h-5 rounded-full bg-blue-300 justify-end p-1 text-xs text-blue-600">14</span>
                    </span>
                    <span className="flex w-full h-5 rounded-full bg-gray-300">
                      <span className="flex w-1/5 h-5 rounded-full bg-red-300 justify-end p-1 text-xs text-red-600">14</span>
                    </span>
                  </span>
                </span>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
