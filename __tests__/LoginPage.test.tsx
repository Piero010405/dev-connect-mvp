// __tests__/LoginPage.test.tsx

import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import LoginPage from "@/app/page"
import { useAuth } from "@/hooks/useAuth"

// 👇 mock de useAuth
jest.mock("@/hooks/useAuth")

describe("LoginPage", () => {
  it("renderiza el formulario de login", () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: jest.fn(),
    })

    render(<LoginPage />)

    expect(screen.getByText("DevConnect")).toBeInTheDocument()
    expect(screen.getByText("Inicia Sesión")).toBeInTheDocument()
  })

  it("permite escribir email y password", () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: jest.fn(),
    })

    render(<LoginPage />)

    const emailInput = screen.getByPlaceholderText("tu@email.com")
    const passwordInput = screen.getByPlaceholderText("••••••••")

    fireEvent.change(emailInput, { target: { value: "test@mail.com" } })
    fireEvent.change(passwordInput, { target: { value: "123456" } })

    expect(emailInput).toHaveValue("test@mail.com")
    expect(passwordInput).toHaveValue("123456")
  })

  it("llama a login() correctamente al enviar formulario", async () => {
    const mockLogin = jest.fn().mockResolvedValueOnce(true)

    ;(useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
    })

    render(<LoginPage />)

    fireEvent.change(screen.getByPlaceholderText("tu@email.com"), {
      target: { value: "user@mail.com" },
    })
    fireEvent.change(screen.getByPlaceholderText("••••••••"), {
      target: { value: "mypassword" },
    })

    fireEvent.submit(screen.getByRole("button"))

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("user@mail.com", "mypassword")
    })
  })

  it("muestra un mensaje de error si login falla", async () => {
    const mockLogin = jest.fn().mockRejectedValueOnce(new Error("Credenciales inválidas"))

    ;(useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
    })

    render(<LoginPage />)

    fireEvent.change(screen.getByPlaceholderText("tu@email.com"), {
      target: { value: "wrong@mail.com" },
    })
    fireEvent.change(screen.getByPlaceholderText("••••••••"), {
      target: { value: "wrongpass" },
    })

    fireEvent.submit(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Credenciales inválidas")).toBeInTheDocument()
    })
  })
})
