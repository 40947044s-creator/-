#include <emscripten.h>
#include <complex>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    float audit_bit(int n, int choice) {
        // The Dot is a Neural State: We audit the accumulation of the choice.
        static std::complex<double> manifold(1.0, 0.0);
        
        // The Instruction: Rotate based on the choice weight.
        double rotation = (choice * M_PI) / std::pow(2.0, n);
        manifold *= std::polar(1.0, rotation);

        float phase = std::arg(manifold) * (180.0 / M_PI);

        // Verification of the Lead:
        // The engine doesn't 'know' 3. It only knows if the phase 
        // reaches the Hamiltonian Invariant (180).
        return phase; 
    }
}