// Для создания модального окна с помощью HeadlessUI, вы можете использовать компонент Dialog, который принимает несколько пропсов, таких как:

// •  open: булево значение, которое указывает, открыто ли окно или нет.

// •  onClose: функция, которая вызывается при закрытии окна.

// •  initialFocus: элемент, на который устанавливается фокус при открытии окна.

// •  static: булево значение, которое указывает, должно ли окно оставаться на своем месте при прокрутке страницы или нет.

// Вот пример кода, который демонстрирует использование компонента Dialog для создания модального окна на React:

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Example() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="centered">
        <button type="button" onClick={openModal} className="button">
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="dialog" onClose={closeModal}>
          <div className="@apply min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="container" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="span" aria-hidden="true"></span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="transition">
                <Dialog.Title as="h3" className="title">
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="p">
                    Your payment has been successfully submitted. We’ve sent
                    your an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button type="button" className="btn" onClick={closeModal}>
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

// Если вы хотите, чтобы модальное окно закрывалось при клике вне области окна, вы должны убедиться, что вы передаете функцию onClose в пропс onClose компонента Dialog. Эта функция будет вызвана, когда пользователь нажмет на клавишу Esc или кликнет на элемент Dialog.Overlay, который представляет собой полупрозрачный фон за окном.

// В приведенном выше примере, функция closeModal устанавливает значение isOpen в false, что приводит к скрытию окна. Вы можете использовать аналогичную логику в своем проекте, или адаптировать ее под свои нужды.
